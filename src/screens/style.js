const React = require("react-native");

const { height, width } = React.Dimensions.get('window');

export default {
  authHeaderText: {
    marginTop: height/8,
    fontSize: 40,
    fontWeight: "800",
    color: '#98f598',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius:20,
    textShadowOffset: {width:10, height:5}
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: height-50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  cameraButton: {
    marginRight: 75,
    color: "#fff",
    fontSize: 40
  },
  cameraButtonContainer:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#transparent',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
  },
  containerView: {
    flex: 1,
  },
  forgotLink: {
    color: "#3897f1",
    backgroundColor: "transparent",
    width:200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  loginFormView: {
    marginTop: 80,
    width: width-(width*.05),
    height: height-(height*.58),
    backgroundColor: '#000000c9',
    borderRadius: 50,
  },
  registerFormView: {
    marginTop: 80,
    width: width-(width*.05),
    height: height-(height*.5),
    backgroundColor: '#000000c9',
    borderRadius: 50
  },
  forgotPasswordFormView: {
    marginTop: 80,
    width: width-(width*.05),
    height: height-(height*.60),
    backgroundColor: '#000000c9',
    borderRadius: 50
  },
  resetPasswordFormView: {
    marginTop: 80,
    width: width-(width*.05),
    height: height-(height*.60),
    backgroundColor: '#000000c9',
    borderRadius: 50,
  },
  loginFormTextInput: {
    height: 43,
    width: width-(width*.2),
    opacity:0.8,
    alignSelf: 'center',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#0f0f0f',
    color:'#cccccc',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  registerFormTextInput: {
    height: 43,
    width: width-(width*.2),
    opacity:0.8,
    alignSelf: 'center',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#0f0f0f',
    color:'#cccccc',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  loginLink: {
    color: "#3897f1",
    textAlign: "center",
    width:200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  loginScreenContainer: {
    flex: 1,
    width: width,
    height: height, 
    alignItems: 'center'
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  logoutButtonContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  modalView: {
    margin: 20,
    height: 250,
    backgroundColor: "#757070f5",
    borderRadius: 10,
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  resetNotificationView: {
    margin: 20,
    height: 200,
    backgroundColor: "#766f6feb",
    borderRadius: 10,
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  picture: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
  },
  resendConfirmationEmailLink: {
    textAlign: "center", 
    padding: 15, 
    color: "#3897f1"
  },
  signUpButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 20,
  },
  fbButton: {
    width:50, 
    height: 50,
    marginLeft: 20
  },
  googleButton: {
    width:50, 
    height: 50,
    marginRight: 20
  },
  statusText: {
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    color: 'red'
  },
  welcbuttons: {
    backgroundColor: '#77dd77',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  welcomeScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultPage: {
    color: "#000000",
    justifyContent: 'center',
    width:200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24
  },
  ResultsForm: {
    marginTop: 150,
    width: width-(width*.05),
    height: height - (height * .55),
    justifyContent: 'center',
    backgroundColor: '#f0eae8',
    opacity: 0.7,
    borderRadius: 50
  },
  backToHome: {
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 50
  },
  ResultHeader: {
    color: "#000000",
    justifyContent: 'center',
    width:200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  ResultBackButton: {
    width:50, 
    height: 40,
    marginRight: 20,
    alignSelf: 'flex-end',
    marginTop: -10,
    position: 'absolute'
  },
  Loader: {
    marginTop: 325,
    justifyContent: 'center',
  },
  ModalLoader: {
    marginTop: 40,
    justifyContent: 'center',
  },
  ModalView:{
    flex: 1,    
    alignItems: 'center',
    backgroundColor: '#a8ee90',
    justifyContent:'center',
    alignItems:'center',
  }
};