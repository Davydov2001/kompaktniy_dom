const baseURL="https://api.telegram.org/bot7954241007:AAGZdcRw8snUQsTgtNPnQwsEUAoueq7rSDw/"

const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseURL}sendMessage?chat_id=-1002757551822&text=${message}&parse_mode=HTML`
    const response = await fetch(url)
    console.log('response', response);
    
} 

export default sendMessage