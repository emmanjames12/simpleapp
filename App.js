import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('./assets/SpiralBuilding.jpg')}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image style={styles.logo} source={require('./assets/profileImage.png')} />
        </View>
        {/* <StatusBar style="auto" /> */}
        <View style={styles.PersonaInfo }>
          <Text style={styles.headerText}>PERSONAL DETAILS</Text>
          <Text style={styles.detailText}>Emmanuelle James Paraiso Duallo </Text>
          <Text style={styles.detailText}>21 Year Old</Text>
          <Text style={styles.detailText}>Bulua, Cagayan de Oro City</Text>
        </View>
        <View style={styles.SocmedInfo }>
          <Text style={styles.headerText}>SOCIAL MEDIA</Text>
          <Text style={styles.detailText}>Instagram: @emman_uelle</Text>
          <Text style={styles.detailText}>Twitter: @emman_uelle</Text>
          <Text style={styles.detailText}>Facebook: Emmanuelle James Duallo</Text>
          <Text style={styles.detailText}>Email: dualloemmanuellejames</Text>
        </View>
        <View style={styles.SkillsInfo }>
          <Text style={styles.headerText}>SKILLS</Text>
          <Text style={styles.detailText}>React Native</Text>
          <Text style={styles.detailText}>JavaScript</Text>
          <Text style={styles.detailText}>HTML/CSS</Text>
          <Text style={styles.detailText}>UI/UX</Text>
          <Text style={styles.detailText}>Front-End Developer</Text>
          <Text style={styles.detailText}>Team Lead Analyst</Text>
          <Text style={styles.detailText}>Manuscript Writter</Text>
          <Text style={styles.detailText}>Researcher</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 160,
    height: 150,
    marginBottom: 5,
  },
  PersonaInfo: {
    width: 250,
    marginBottom: 20,
    padding: 8,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    flexDirection: 'column',
  },
  SocmedInfo: {
    width: 250,
    marginBottom: 20,
    padding: 8,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    flexDirection: 'column',
  },
  SkillsInfo: {
    width: 250,
    marginBottom: 20,
    padding: 8,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#1f6c8f',
  },
  detailText: {
    fontSize: 15,
    marginBottom: -5,
    marginVertical: 2,

  },
});
