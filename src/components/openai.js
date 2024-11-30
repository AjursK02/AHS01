import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Load API key from environment variable

export const sendMsgToOpenAI = async (message) => {
    if (!apiKey) {
        console.error("OpenAI API key is missing. Set REACT_APP_OPENAI_API_KEY in your environment variables.");
        return "Sorry, I couldn't process that request. Please try again.";
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with OpenAI:', error.response?.data || error.message);
        return "Sorry, I couldn't process that request. Please try again.";
    }
};
