import React, { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    // 
    const renderBubble = (props) => {
        return <Bubble {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#f8c301'
                }
            }}
            textStyle={{
                right: {
                    color: '#fff'
                }
            }}
        />
    }
    // 
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons style={{ marginBottom: 5, marginRight: 5, }} name='send-circle' size={35} color='#f8c301' />
                </View>
            </Send>
        )
    }
    // 
    const scrollToBottomComponent = () => {
        return (
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        )
    }

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_GS-PcmIjqMwLVhFvNYuItV1IQWU2V9Bo-KQdK7w=s83-c-mo',
    //             },
    //         },
    //     ])
    // }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    )
}

export default ChatScreen