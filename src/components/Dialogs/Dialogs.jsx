import React, { createRef } from "react"
import msg from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
	const getDialogs = props.state.dialogsData.map((dialog, index) => {
		return <Dialog key={index} id={dialog.id} name={dialog.name} />
	})

	const getMessages = props.state.messagesData.map((message, index) => {
		return <Message key={index} text={message.text} />
	})

	const textareaRef = createRef()

	const textAreaValue = props.state.values.newMessageState

	const onAddMessage = () => {
		props.addMessage()
	}

	const onUpdateTextMessage = () => {
		props.updateTextMessage(textareaRef.current.value)
	}

	return (
		<div className={msg.container}>
			<div className={`${msg.dialogs} block`}>
				<div className={msg.dialogs__items}>
					{getDialogs}
				</div>
				<div className={msg.dialog}>
					<div className={msg.dialog__messages}>
						{getMessages}
					</div>
					<textarea
						placeholder={"Напишите сообщение..."}
						onChange={onUpdateTextMessage}
						value={textAreaValue}
						ref={textareaRef} />
					<button onClick={onAddMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs