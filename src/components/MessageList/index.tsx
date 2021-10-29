import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { io } from 'socket.io-client';

import api from '../../services/api';
import { MESSAGES_EXAMPLE } from '../../utils/messages';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const messageQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', newMessage => {
  messageQueue.push(newMessage);
});

export function MessageList(){
  const [ currentMessages, setCurrentMessages ] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await api.get<MessageProps[]>('/messages/last3');
      setCurrentMessages(response.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages(prevState => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))

        messageQueue.shift();
      }

      return () => clearInterval(timer);
    }, 3000)
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {currentMessages.map(message => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}