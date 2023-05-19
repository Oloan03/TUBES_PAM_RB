import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import signup from './signup';
import { Input } from 'react-native-elements';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleRegister = () => {
    signup(email, password, name, phone, birthdate);
  };

  return (
    <View>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <Input
        placeholder="Birthdate"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
