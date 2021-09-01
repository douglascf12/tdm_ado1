import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image, Modal } from 'react-native';
import Constants from 'expo-constants';

const ShowDetalhes = ({ display, toogleModal, mensagem }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={display}
    onRequestClose={toogleModal}
  >

    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Pressable onPress={toogleModal}>
          <Text style={styles.descriptionStyle}>Descrição</Text>
          <Text>{mensagem}</Text>
        </Pressable>
      </View>
    </View>

  </Modal>
)

const Pessoa = ({ name, description, avatar }) => {
  //state para controle do Modal
  const [modal, setModal] = React.useState(false)

  function mudaModal() {
    setModal(!modal)
  }

  return (
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={description} />
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: avatar,
          }}
        />
        <Text style={styles.paragraph}>{name}</Text>
      </Pressable>
    </View>
  )
}

const PokemonsData = [
  {
    "id": 1,
    "name": "Bulbassauro",
    "description": "Há uma semente de planta nas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    "id": 4,
    "name": "Charmander",
    "description": "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "description": "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "description": "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "description": "Os pikachu, que podem gerar eletricidade poderosa, têm bolsas nas bochechas que são extremamente macias e super elásticas.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "description": "A largura de suas mãos pode não ser coincidência - muitos cientistas acreditam que suas palmas foram aumentadas especificamente para pantomima.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "description": "Seu DNA é quase igual ao de Mew. No entanto, seu tamanho e disposição são muito diferentes.",
    "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
  },
];

export default function App() {
  //função que renderiza cada item do FlatList
  function meuItem({ item }) {
    return (
      <Pessoa name={item.name}
        avatar={item.avatar}
        description={item.description}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={PokemonsData}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#808080',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFD700'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionStyle: {
    margin: 0,
    padding: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#D3D3D3'
  },
});