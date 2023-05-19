import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

const AccountScreen = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [birthdate, setBirthdate] = useState('01/01/1990');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Username:', username);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Birthdate:', birthdate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bordername}>
       <Image
        source={{uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'}}
        style={styles.profileImage}
      />
       <View style={styles.containeruser}>
       <Text style={styles.label}>Username</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      ) : (
        <Text style={styles.text}>{username}</Text>
      )}
       </View>
       <View style={styles.edit}>
       {isEditing ? (
        <Button title="Save" onPress={handleSave} />
      ) : (
        <Button title="Edit" onPress={handleEdit} />
      )}
       </View>
      </View>

      <Text style={styles.label}>Name</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      ) : (
        <Text style={styles.text}>{name}</Text>
      )}

      <Text style={styles.label}>Email</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      ) : (
        <Text style={styles.text}>{email}</Text>
      )}

      <Text style={styles.label}>Phone</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      ) : (
        <Text style={styles.text}>{phone}</Text>
      )}

      <Text style={styles.label}>Birthdate</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={(text) => setBirthdate(text)}
        />
      ) : (
        <Text style={styles.text}>{birthdate}</Text>
      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#E8E3E3',

  },
  bordername: {
    alignItems: 'left',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F8D6D6',
  },

  edit: {
    marginRight: 10,
    marginTop: 20,
  },

  containeruser: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'left',
    flex: 1,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 5,


  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 19,
    borderWidth: 0.5,
  },

});

export default AccountScreen;