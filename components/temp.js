<FlatList
	data={Mails}
	 keyExtractor={(item, index) => item.id}
	renderItem={({item}) => <Image source={item.src} />}
 />

 const InboxNavigator = createStackNavigator({
   Inbox: { screen: InboxHome },
   Details: { screen: MessageDetail },
   });
   export class Inbox extends Component {
     render(){
       return(
         <InboxNavigator />);
     }
   }
