import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){

  const message = {
    id: '123123',
    text: 'mensagem de teste',
    user: {
      name: 'Mike Fernando',
      avatar_url: 'https://github.com/MikeFernando.png',
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
       <Message data={message} />
       <Message data={message} />
       <Message data={message} />
    </ScrollView>
  );
}