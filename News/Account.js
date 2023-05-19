import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

const AccountScreen = () => {
  const [username, setUsername] = useState('PamNews');
  const [name, setName] = useState('PAM News');
  const [email, setEmail] = useState('PamNews@pam.com');
  const [phone, setPhone] = useState('0123456789');
  const [birthdate, setBirthdate] = useState('15/05/2023');
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
        source={require('./assets/profile-image.png')}
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

      <View style={styles.border}>
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
      </View>

      <View style={styles.border}>
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
      </View>

      <View style={styles.border}>
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
      </View>

      <View style={styles.border}>
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
  border: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  bordername: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F8D6D6',
  },

  edit: {
    marginRight: 15, 
  },

  containeruser: {
    marginLeft: 20,
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
  text: {
    fontSize: 13,
    marginLeft: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    marginLeft: 10,
    marginBottom: 5,
    width: '80%',
    fontSize: 13,
    height: 19,
    borderWidth: 0.5,
  },

});

export default AccountScreen;
