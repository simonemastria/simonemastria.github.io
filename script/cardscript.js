
class Card {

  constructor(id, title, description, image) {
    this.idCard = id
    this.titre = title
    this.description = description
    this.image = image
  }

  initCard() {
    this.updateDom();
    this.activateListeners();
  }

  /**
   * Updates the DOM with the card's image, title, and description.
   */
  updateDom() {
    var cardDom = document.getElementById(this.idCard)
    if (cardDom.hasChildNodes()) {
      var cardDomImage = cardDom.getElementsByClassName('card-image')[0]
      cardDomImage.src = this.image;

      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      cardDomTitle.innerHTML = this.titre;

      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      cardDomDesc.innerHTML = this.description;
    }
  }

  activateListeners() {
    var cardDom = document.getElementById(this.idCard)
    cardDom.addEventListener("mouseover", function (event) {
      var cardDomTitle = cardDom.getElementsByClassName('card-title')[0]
      var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0]
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight;
      cardDomMiddle.style.height = cardMiddleHeight + 15 + "px";
    }, false);

    cardDom.addEventListener("mouseout", function (event) {
      var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0]
      cardDomMiddle.style.height = 50 + "px";
    }, false);
  }
}

var card1 = new Card("card1", "Miniaturization", "Making smaller mobile form factors.", "https://media.istockphoto.com/id/1305870207/it/foto/transistor-finfet-per-14nm-10nm-7-nm-nodo-tecnologico-5nm-del-processo-di-produzione-dei-chip.jpg?s=1024x1024&w=is&k=20&c=PlJcR-Lps7APPfR7DPFSfayhB3SGo5-do9RoiJhDNKk=")
card1.initCard();

var card2 = new Card("card2", "Connectivity", "Developing devices and application that allows users to be online and communicate wirelessly on the move.", "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/09/satellite_connectivity/25089464-1-eng-GB/Satellite_connectivity_pillars.jpg");
card2.initCard();

var card3 = new Card("card3", "Portability", "Reducing the size of hardware for creating computers that can be easily moved.", "https://www.taxlawplanet.it/wp-content/uploads/2018/03/portability.jpg");
card3.initCard();

var card4 = new Card("card4", "Convergence", "Integrating emerging types of digital devices into hybrid devices, capable of more than one function.", "https://img.freepik.com/free-vector/smartphone-compatible-smartwatch-data-transfer-symbols_1284-17018.jpg?w=1800&t=st=1705163215~exp=1705163815~hmac=30e99c56353d25477ba92c5612c01f6f1ae8c85b0fa58ddda03633a78733344a");
card4.initCard();

var card5 = new Card("card5", "Apps", "Applications are now especially conceived for use and consumption on mobile devices, creating fun, interactive and easy to use experience.", "https://i.insider.com/522a0054ecad04335c00d7e5?width=600&format=jpeg&auto=webp");
card5.initCard();

var card6 = new Card("card6", "Digital Ecosystems", "Is a group of interconnected information technology resources that can function as a unit. Are made up of suppliers, costumers, trading partner, application, third-party data service providers and all respective technologies.", "https://media.istockphoto.com/id/968113166/it/foto/concetto-di-casa-intelligente-rete-di-comunicazione-di-residenza-sistema-di-gestione.jpg?s=1024x1024&w=is&k=20&c=gnH84hqFcAQkE-SrSU5cWI2wtmXk8jzLr1RShQFK9m4=");
card6.initCard();

var card7 = new Card("card7", "Miniaturization", "Making smaller mobile form factors.", "https://media.istockphoto.com/id/1305870207/it/foto/transistor-finfet-per-14nm-10nm-7-nm-nodo-tecnologico-5nm-del-processo-di-produzione-dei-chip.jpg?s=1024x1024&w=is&k=20&c=PlJcR-Lps7APPfR7DPFSfayhB3SGo5-do9RoiJhDNKk=");
card7.initCard();


