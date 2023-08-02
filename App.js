import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
 const pedra = ()=>{
  console.log('pedra')
}
 const papel = ()=>{
  console.log('papel')
}
 const tesoura = ()=>{
  console.log('tesoura')
}
const novapartida = ()=>{
  console.log('nova partida')
}



  return (
    <View style={styles.container}>
      <View style={{borderWidth: 1, flex: 1, justifyContent:'center', alignItems:'center',}}>
        <Text style={{fontSize:30}}>JOKEMPO</Text>
      </View>
      <View style={{borderWidth: 1, flex: 1}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text > placar </Text>
        </View>

        <View style={{ flex:1, justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <Text style={{fontSize:30}} >0</Text>
          <Text style={{fontSize:30}}>0</Text>
        </View>
      </View>
      <View style={{borderWidth: 1, flex: 2, justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
        <Image
        source={require('./assets/caixa.png')}
        style={{width:'20%', height:'37%'}} 
        />

        <Image
        source={require('./assets/vs.png')}
        style={{width:'25%', height:'35%'}}
        />

        <Image
        source={require('./assets/caixa.png')}
        style={{width:'20%', height:'37%'}} 
        />
     
      </View>
      <View style={{borderWidth: 1, flex: 1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={novapartida} style={{ backgroundColor:'#cc00ff', alignItems: 'center',justifyContent:'center', borderRadius:10, borderColor:'#000000'
        , borderWidth:1,padding: 5, width:'50%'}}>
          <Text> nova partida </Text>
        </TouchableOpacity>
      </View>

      <View style={{borderWidth: 1, flex: 2, flexDirection:'row'}}>
       <TouchableOpacity onPress={papel} style={{width:'33%', height:'100%', justifyContent:'center'}}>
        <Image
        source={require('./assets/papel.png')}
        style={{width:'100%',height:'50%'}}
        />
       </TouchableOpacity>

       <TouchableOpacity onPress={pedra} style={{width:'33%', height:'100%', justifyContent:'center'}}>
       <Image
        source={require('./assets/pedra.png')}
        style={{width:'100%',height:'50%'}}
        />
       </TouchableOpacity>
       
       <TouchableOpacity onPress={tesoura} style={{width:'33%', height:'100%', justifyContent:'center'}}>
       <Image
        source={require('./assets/tesoura.png')}
        style={{width:'100%',height:'50%'}}
        />
       </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
