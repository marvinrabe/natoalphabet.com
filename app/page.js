import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-full max-w-[640px] p-8">
      <h1 className="text-2xl mb-8 flex items-center gap-2">
        <Image
          className=""
          src="/logo.svg"
          alt="NATO Alphabet"
          width={48}
          height={48}
          priority
        />
        <span className="font-bold">NATO</span> Alphabet
      </h1>
      <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-2xl rounded-md py-2 px-4">
        <table className="w-full text-left">
          <caption className="sr-only">
            NATO Phonetic Alphabet
          </caption>
          <thead className="border-b-2 border-gray-300 dark:border-gray-800">
            <tr>
              <th className="font-normal text-gray-600 dark:text-gray-300">Symbol</th>
              <th className="font-normal text-gray-600 dark:text-gray-300">Code Word</th>
              <th className="font-normal text-gray-600 dark:text-gray-300">Morse Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-gray-800">
            <tr>
              <th>A</th>
              <td><strong>A</strong>lfa</td>
              <td>● ▬</td>
            </tr>
            <tr>
              <th>B</th>
              <td><strong>B</strong>ravo</td>
              <td>▬ ● ● ●</td>
            </tr>
            <tr>
              <th>C</th>
              <td><strong>C</strong>harlie</td>
              <td>▬ ● ▬ ●</td>
            </tr>
            <tr>
              <th>D</th>
              <td><strong>D</strong>elta</td>
              <td>▬ ● ●</td>
            </tr>
            <tr>
              <th>E</th>
              <td><strong>E</strong>cho</td>
              <td>●</td>
            </tr>
            <tr>
              <th>F</th>
              <td><strong>F</strong>oxtrot</td>
              <td>● ● ▬ ●</td>
            </tr>
            <tr>
              <th>G</th>
              <td><strong>G</strong>olf</td>
              <td>▬ ▬ ●</td>
            </tr>
            <tr>
              <th>H</th>
              <td><strong>H</strong>otel</td>
              <td>● ● ● ●</td>
            </tr>
            <tr>
              <th>I</th>
              <td><strong>I</strong>ndia</td>
              <td>● ●</td>
            </tr>
            <tr>
              <th>J</th>
              <td><strong>J</strong>uliett</td>
              <td>● ▬ ▬ ▬</td>
            </tr>
            <tr>
              <th>K</th>
              <td><strong>K</strong>ilo</td>
              <td>▬ ● ▬</td>
            </tr>
            <tr>
              <th>L</th>
              <td><strong>L</strong>ima</td>
              <td>● ▬ ● ●</td>
            </tr>
            <tr>
              <th>M</th>
              <td><strong>M</strong>ike</td>
              <td>▬ ▬</td>
            </tr>
            <tr>
              <th>N</th>
              <td><strong>N</strong>ovember</td>
              <td>▬ ●</td>
            </tr>
            <tr>
              <th>O</th>
              <td><strong>O</strong>scar</td>
              <td>▬ ▬ ▬</td>
            </tr>
            <tr>
              <th>P</th>
              <td><strong>P</strong>apa</td>
              <td>● ▬ ▬ ●</td>
            </tr>
            <tr>
              <th>Q</th>
              <td><strong>Q</strong>uebec</td>
              <td>▬ ▬ ● ▬</td>
            </tr>
            <tr>
              <th>R</th>
              <td><strong>R</strong>omeo</td>
              <td>● ▬ ●</td>
            </tr>
            <tr>
              <th>S</th>
              <td><strong>S</strong>ierra</td>
              <td>● ● ●</td>
            </tr>
            <tr>
              <th>T</th>
              <td><strong>T</strong>ango</td>
              <td>▬</td>
            </tr>
            <tr>
              <th>U</th>
              <td><strong>U</strong>niform</td>
              <td>● ● ▬</td>
            </tr>
            <tr>
              <th>V</th>
              <td><strong>V</strong>ictor</td>
              <td>● ● ● ▬</td>
            </tr>
            <tr>
              <th>W</th>
              <td><strong>W</strong>hiskey</td>
              <td>● ▬ ▬</td>
            </tr>
            <tr>
              <th>X</th>
              <td><strong>X</strong>-ray</td>
              <td>▬ ● ● ▬</td>
            </tr>
            <tr>
              <th>Y</th>
              <td><strong>Y</strong>ankee</td>
              <td>▬ ● ▬ ▬</td>
            </tr>
            <tr>
              <th>Z</th>
              <td><strong>Z</strong>ulu</td>
              <td>▬ ▬ ● ●</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs pt-8 text-gray-400 dark:text-gray-600">
        Compass Rose by NAPISAH from <a href="https://thenounproject.com/browse/icons/term/compass-rose/" target="_blank" title="Compass Rose Icons">Noun Project</a> (CC BY 3.0)
      </p>
    </main>
  );
}
