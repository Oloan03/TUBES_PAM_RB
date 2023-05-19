import { TextInput, TouchableOpacity, View } from "react-native";

<View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}/>
    </View>
    <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Username</Text>
        <TextInput style={[styles.input, {color:'black'}]} placeholder="Username" placeholderTextColor="#fff" />
        <Text style={styles.inputText}>Email</Text>
        <TextInput style={[styles.input, {color:'black'}]} placeholder="Email" placeholderTextColor="#fff" />
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={[styles.input, {color:'black'}]} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        <Text style={styles.inputText}>Masukkan Ulang Password</Text>
        <TextInput style={[styles.input, {color:'black'}]} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        <TouchableOpacity style={styles.registerButton} onPress={handlePressRegister}>
            <Text style={styles.registerButtonText}>Daftar</Text>
        </TouchableOpacity>
        <Text style={styles.loginButton}>Sudah punya akun?<TouchableOpacity><Text style={styles.loginButton} >Login</Text> m </TouchableOpacity> </Text>
    </View>
</View>