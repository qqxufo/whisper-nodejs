# whisper-nodejs

`whisper-nodejs` is an npm package for using OpenAI's Whisper API to transcribe and translate audio. With whisper-nodejs, you can easily convert audio files into text and translate them into English or other supported languages.

## Installation

Install with npm:

```
npm install whisper-nodejs
```

## Usage

```
const Whisper = require('whisper-nodejs');
const whisper = new Whisper('YOUR_API_KEY');

// Transcribe audio
whisper.transcribe('/path/to/file/openai.mp3', 'whisper-1')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });

// Translate audio
whisper.translate('/path/to/file/german.mp3', 'whisper-1', 'en')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });
```

## API

### `new Whisper(apiKey)`

Creates a new Whisper instance for calling the transcribe and translate methods.

```
const whisper = new Whisper('YOUR_API_KEY');
```

`apiKey`: Your OpenAI API key.

### `whisper.transcribe(filePath, modelName)`

Transcribes an audio file to text.

```
whisper.transcribe('/path/to/file/openai.mp3', 'whisper-1')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });

```

`filePath`: The path to the audio file to transcribe.
`modelName`: The name of the Whisper model.

### `whisper.translate(filePath, modelName, targetLanguage)`

Translates an audio file into English or another supported language.

```
whisper.translate('/path/to/file/german.mp3', 'whisper-1', 'en')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });
```

`filePath`: The path to the audio file to translate.
`modelName`: The name of the Whisper model.
`targetLanguage`: The target language code, such as en for English, zh for Chinese, and so on.

## References
https://platform.openai.com/docs/api-reference/introduction