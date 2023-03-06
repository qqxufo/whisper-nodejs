# whisper-nodejs

`whisper-js` 是一个使用 OpenAI 的 Whisper API 进行音频转录和翻译的 npm 包。使用 whisper-js，您可以轻松地将音频文件转换为文本，并将其翻译成英文或其他支持的语言。

## 安装

使用 npm 安装：

```
npm install whisper-nodejs
```

## 用法

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

创建一个新的 Whisper 实例，用于调用 transcribe 和 translate 方法。

```
const whisper = new Whisper('YOUR_API_KEY');
```

`apiKey`: 您的 OpenAI API 密钥。

### `whisper.transcribe(filePath, modelName)`

将音频文件转录为文本。

```
whisper.transcribe('/path/to/file/openai.mp3', 'whisper-1')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });

```

`filePath`: 要转录的音频文件路径。
`modelName`: Whisper 模型的名称。

### `whisper.translate(filePath, modelName, targetLanguage)`

将音频文件翻译成英文或其他支持的语言。

```
whisper.translate('/path/to/file/german.mp3', 'whisper-1', 'en')
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  });
```

`filePath`: 要翻译的音频文件路径。
`modelName`: Whisper 模型的名称。
`targetLanguage`: 目标语言代码，例如 en（英文）、zh（中文）等。

## 参考资料
https://platform.openai.com/docs/api-reference/introduction
