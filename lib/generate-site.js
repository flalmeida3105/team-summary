// create the header section
const generateHeader = headerText => {
    if (!headerText) {
        return '';
    }

    return `
    <header class="bg-white mb-4 border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-red-400">
        <h1 class="text-center text-2xl font-semibold whitespace-nowrap text-black">Team Summary</Summary></h1>
    </header>
  `;
};