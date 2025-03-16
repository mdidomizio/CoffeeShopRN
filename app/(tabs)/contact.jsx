import { StyleSheet, Image, Platform, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Coffee Shop</Text>

      <Text style={styles.titleH2}>Our Story</Text>

      <Text style={styles.defaultText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum nec diam bibendum, viverra dui tincidunt, fringilla dui. 
        Praesent ullamcorper eros lacus, ac convallis risus aliquet eu. 
        Morbi consequat augue ac libero placerat, eget pretium turpis aliquam. 
        Etiam aliquet velit vel libero hendrerit placerat. 
        Sed at velit lectus. Aenean et justo ut dolor vehicula tempor ac eget lacus. 
        Aliquam malesuada blandit libero, quis scelerisque nisl vestibulum non. 
        Curabitur at neque tempus, lobortis ante eget, vulputate velit. 
        Curabitur in neque et nibh tristique commodo. Fusce nec imperdiet risus. 
        Sed ac erat erat. Donec faucibus ante non massa pulvinar eleifend. Vivamus nec aliquam nisi. 
        Nullam arcu urna, malesuada vel neque sed, malesuada cursus augue.
        Proin ultricies ac urna non tempor.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 40,
  },
  titleH2: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginLeft: 16,
  },

defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'justify',
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 16,
  },
});
