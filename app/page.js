import Image from 'next/image'
import PlayMorseCode from '@/components/PlayMorseCode'
import PlayCodeWord from '@/components/PlayCodeWord'

export default function Home () {
  const faq = [
    {
      title: 'What is the NATO alphabet?',
      content: 'The NATO phonetic alphabet, also known as the International Radiotelephony Spelling Alphabet or the ICAO phonetic alphabet, is a set of standardized phonetic code words used for clear communication over radio, telephone, and other audio transmission channels. It was developed by the International Civil Aviation Organization (ICAO) to improve communication clarity and accuracy, especially in situations where the transmission may be distorted or difficult to understand.'
    },
    {
      title: 'How are the words in the NATO alphabet chosen? ',
      content: 'The words in the NATO phonetic alphabet are chosen based on several criteria to ensure clarity, distinctiveness, and international comprehensibility. Factors considered include distinctiveness to minimize confusion, international understanding across languages and cultures, ease of pronunciation for non-native speakers, memorability under pressure, common usage in everyday language, and avoidance of ambiguity or potential misinterpretation. By considering these factors, the NATO phonetic alphabet provides a standardized set of words aimed at enhancing communication clarity and effectiveness across various contexts, including aviation, military operations, emergency services, and telecommunications.'
    },
    {
      title: 'Why is the NATO alphabet used?',
      content: 'The NATO phonetic alphabet is used to enhance communication clarity and accuracy, especially in environments where transmission may be distorted or difficult to understand. It provides a standardized set of phonetic code words chosen for their distinctiveness, international comprehensibility, ease of pronunciation, memorability, and avoidance of ambiguity. By employing this alphabet, speakers from different linguistic backgrounds can effectively communicate letters over radio, telephone, and other audio transmission channels, facilitating smooth and accurate communication in various sectors such as aviation, military operations, emergency services, and telecommunications.'
    },
    {
      title: 'Who uses the NATO alphabet?',
      content: 'The NATO phonetic alphabet is utilized by a wide range of professionals and organizations, including pilots, air traffic controllers, military personnel, emergency responders, law enforcement agencies, maritime operators, and telecommunications operators. Pilots, in particular, rely on the NATO alphabet for clear and unambiguous communication during flight operations, especially when communicating over radio channels where clarity is essential for safety and efficiency.'
    },
    {
      title: 'Is NATO alphabet international?',
      content: 'Yes, the NATO phonetic alphabet is international in its usage. It was developed by the International Civil Aviation Organization (ICAO), which is a specialized agency of the United Nations. As a result, the alphabet is widely recognized and used across the globe, particularly in aviation and military contexts, as well as in various other industries where clear communication is essential. Its standardized set of words facilitates effective communication between individuals of different linguistic backgrounds and ensures clarity in situations where traditional spelling of words may lead to misunderstanding or ambiguity.'
    },
    {
      title: 'Which countries use the NATO alphabet?',
      content: 'The NATO phonetic alphabet is employed by numerous countries worldwide, especially those heavily involved in aviation, military operations, and telecommunications. Noteworthy nations utilizing this standardized communication system include the United States, United Kingdom, Canada, Australia, Germany, France, Italy, Spain, Japan, Russia, China, and Brazil, among others. The NATO alphabet ensures clear and effective communication across diverse linguistic backgrounds and is utilized in various sectors such as aviation, maritime operations, emergency services, law enforcement, and military activities to facilitate precise and unambiguous exchanges.'
    },
    {
      title: 'Who invented the NATO alphabet?',
      content: 'The NATO phonetic alphabet, also known as the International Radiotelephony Spelling Alphabet, was not invented by a single individual. Instead, it evolved over time through international collaboration and standardization efforts within the aviation and telecommunications communities. However, its development can be attributed to various organizations and authorities, including the International Civil Aviation Organization (ICAO), the North Atlantic Treaty Organization (NATO), and other international bodies involved in aviation and communication standards.'
    }
  ]

  const natoAlphabet = [
    { symbol: 'A', codeWord: 'Alfa', morseCode: '● ▬'},
    { symbol: 'B', codeWord: 'Bravo', morseCode: '▬ ● ● ●'},
    { symbol: 'C', codeWord: 'Charlie', morseCode: '▬ ● ▬ ●'},
    { symbol: 'D', codeWord: 'Delta', morseCode: '▬ ● ●'},
    { symbol: 'E', codeWord: 'Echo', morseCode: '●'},
    { symbol: 'F', codeWord: 'Foxtrot', morseCode: '● ● ▬ ●'},
    { symbol: 'G', codeWord: 'Golf', morseCode: '▬ ▬ ●'},
    { symbol: 'H', codeWord: 'Hotel', morseCode: '● ● ● ●'},
    { symbol: 'I', codeWord: 'India', morseCode: '● ●'},
    { symbol: 'J', codeWord: 'Juliett', morseCode: '● ▬ ▬ ▬'},
    { symbol: 'K', codeWord: 'Kilo', morseCode: '▬ ● ▬'},
    { symbol: 'L', codeWord: 'Lima', morseCode: '● ▬ ● ●'},
    { symbol: 'M', codeWord: 'Mike', morseCode: '▬ ▬'},
    { symbol: 'N', codeWord: 'November', morseCode: '▬ ●'},
    { symbol: 'O', codeWord: 'Oscar', morseCode: '▬ ▬ ▬'},
    { symbol: 'P', codeWord: 'Papa', morseCode: '● ▬ ▬ ●'},
    { symbol: 'Q', codeWord: 'Quebec', morseCode: '▬ ▬ ● ▬'},
    { symbol: 'R', codeWord: 'Romeo', morseCode: '● ▬ ●'},
    { symbol: 'S', codeWord: 'Sierra', morseCode: '● ● ●'},
    { symbol: 'T', codeWord: 'Tango', morseCode: '▬'},
    { symbol: 'U', codeWord: 'Uniform', morseCode: '● ● ▬'},
    { symbol: 'V', codeWord: 'Victor', morseCode: '● ● ● ▬'},
    { symbol: 'W', codeWord: 'Whiskey', morseCode: '● ▬ ▬'},
    { symbol: 'X', codeWord: 'X-ray', morseCode: '▬ ● ● ▬'},
    { symbol: 'Y', codeWord: 'Yankee', morseCode: '▬ ● ▬ ▬'},
    { symbol: 'Z', codeWord: 'Zulu', morseCode: '▬ ▬ ● ●'}
  ]

  const schema = {
    '@context': 'http://schema.org',
    '@type': 'FAQPage',
    mainEntity:
      faq.map((item) => ({
        '@type': 'Question',
        name: item.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.content,
        },
      })),
  }

  return (
    <main className="flex flex-col mx-auto w-full max-w-[640px] p-8">
      <h1 className="text-2xl mb-8 flex items-center gap-2">
        <Image
          className=""
          src="/images/logo.svg"
          alt="NATO Alphabet"
          width={48}
          height={48}
          priority
        />
        <span className="font-bold">NATO</span> Alphabet
      </h1>
      <div
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-md py-2 px-4">
        <table className="w-full text-left">
          <caption className="sr-only">
            NATO Phonetic Alphabet
          </caption>
          <thead className="border-b-2 border-gray-300 dark:border-gray-700">
            <tr>
              <th className="font-normal text-gray-600 dark:text-gray-300">&nbsp;</th>
              <th className="font-normal text-gray-600 dark:text-gray-300">Letter</th>
              <th className="font-normal text-gray-600 dark:text-gray-300">Code Word</th>
              <th className="font-normal text-gray-600 dark:text-gray-300">Morse Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
            {natoAlphabet.map(item => <tr key={item.symbol}>
              <td>
                <PlayCodeWord
                  symbol={item.symbol}
                />
              </td>
              <td>{item.symbol}</td>
              <td>{item.codeWord}</td>
              <td>
                <PlayMorseCode
                  symbol={item.symbol}
                  text={item.morseCode}
                />
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <section className="my-8 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-800">
        {faq.map((item, key) => (
          <details className="group py-2 text-lg" key={key}>
            <summary
              className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold marker:[font-size:0px]">
              {item.title}
              <svg className="h-6 w-6 rotate-0 transform text-gray-400 dark:text-gray-500 group-open:rotate-180"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p className="my-4 text-gray-700 dark:text-gray-300">{item.content}</p>
          </details>
        ))}
      </section>
      <p className="text-xs text-gray-400 dark:text-gray-600">
        Compass Rose by NAPISAH from <a href="https://thenounproject.com/browse/icons/term/compass-rose/"
                                        target="_blank" title="Compass Rose Icons">Noun Project</a> (CC BY 3.0)
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </main>
  )
}
