import { customProvider } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';
import { createOpenAI } from '@ai-sdk/openai';

// const xai = createXai({ apiKey: XAI_API_KEY });
// const groq = createGroq({ apiKey: GROQ_API_KEY });
const openai = createOpenAI({ apiKey: OPENAI_API_KEY });

export const myProvider = customProvider({
	languageModels: {
		'chat-model': openai('gpt-4o'),
		'title-model': openai('gpt-4o')
		// 'chat-model': xai('grok-2-1212'),
		// 'chat-model-reasoning': wrapLanguageModel({
		// 	model: groq('deepseek-r1-distill-llama-70b'),
		// 	middleware: extractReasoningMiddleware({ tagName: 'think' })
		// }),
		// 'title-model': xai('grok-2-1212'),
		// 'artifact-model': xai('grok-2-1212')
	}
	// imageModels: {
	// 	'small-model': xai.image('grok-2-image')
	// }
});
