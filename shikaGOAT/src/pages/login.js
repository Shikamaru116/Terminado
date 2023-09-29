import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

export default function App(props) {

  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register")
  }
    return (

    <SafeAreaView style={styles.container}>
    <View style={styles.firstSection}>
    <Image 
    source={{
        uri: 'https://subir-imagen.com/images/2023/09/28/WhatsApp-Image-2023-09-28-at-15.13.28.jpeg',
    }}
    style={{ width:"100%", height:"100%", resizeMode: "cover"}}
    />
      <View style={{position:'absolute'}}>
      <Text style={styles.title}>Trivilin</Text>
      </View>
    </View>

    <View style={styles.secondSection}>
<View>
      <View style={styles.spaceing}>
    <Text style={styles.label}>Correo Electronico</Text>
    <TextInput
    style={styles.textInput}
    underlineColorAndroid="#A03636"
    placeholder="ejemplo@ejemplo.com"
    keyboardType='email-address'
  />
      </View>

      <View style={styles.spaceing}>
<Text style={styles.label}>Contraseña</Text>
    <TextInput
    style={styles.textInput}
    underlineColorAndroid="#A03636"
    placeholder="**********"
    secureTextEntry={true}
    />
      </View>

      <View style={styles.spaceing}>
<Text style={styles.forgotPassword}>¿Olvidaste tu Contraseña?</Text>    
      </View>

      <View style={styles.spaceing}>
<TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTxt}>Iniciar Sesion</Text>
    </TouchableOpacity>
    </View>
  </View>


    <View style={[styles.spaceing, styles.row]}>
      <Text style={styles.label}>¿No tienes cuenta?</Text>
      <TouchableOpacity style={styles.signup} onPress={goToRegister}>
        <Text>Registrate</Text>
      </TouchableOpacity>
      </View>
  </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    width: "100%"
},

secondSection: {
  flex: 2,
  backgroundColor: "white",
  width: "100%",
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  padding: 20,
  justifityContent: "space-between"
},

title: {
  fontSize: 48,
  color:'white',
},
label :{
color: '#ccc'
},

textInput: {
color: "#000",
padding: 8,
},

forgotPassword: {
  color:"black",
  textAlign: "right"
},
button: {
  backgroundColor: "#A03636",
  padding: 15,
  borderRadius:20,
  alignItems:"center"
},

buttonTxt:{
  color:"white",
  fontWeight: 'bold'
},

spaceing: {
  marginTop: 10,
},

row:{
  flexDirection: "row",
  justifityContent: "center",
},

signup:{
  color:"2E4560",
  paddingLeft: 5,
}
});
