import { StyleSheet, Button,Alert, View } from 'react-native';

export default function App() {

  const create3ButtonAlert=()=>{
    Alert.alert(
      "Testing Alert",
      "Your are am amazing Dev",
      [
        {
          text:"Ask Me Later",
          onPress:()=>console.log("Ask Me Later")
        },
        {
          text:"Yeah",
          onPress:()=>console.log("Yeah"),
          style:'default'
        },
        {
          text:"Nope",
          onPress:()=>console.log("Nope"),
          style:'cancel'
        }
      ],
      {cancelable:false}
    )
  }
  return (
    <View style={styles.container}>
      <Button title="Alert 3 Button" onPress={create3ButtonAlert}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }
}
)
