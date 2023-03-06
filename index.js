const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

class Whisper {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openai.com/v1/audio';
  }

  async transcribe(filePath, modelName) {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));
    formData.append('model', modelName);

    try {
      const response = await axios.post(`${this.baseUrl}/transcriptions`, formData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      return response.data.text;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

  async translate(filePath, modelName, targetLanguage) {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));
    formData.append('model', modelName);
    formData.append('target_language', targetLanguage);

    try {
      const response = await axios.post(`${this.baseUrl}/translations`, formData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      return response.data.text;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
}

module.exports = Whisper;