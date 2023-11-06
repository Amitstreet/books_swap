import { createSlice } from "@reduxjs/toolkit";


// import {abcdef} from '@uiw/codemirror-theme-abcdef';
// import {androidstudio} from '@uiw/codemirror-theme-androidstudio';
// import {atomone} from '@uiw/codemirror-theme-atomone';
// import {aura} from '@uiw/codemirror-theme-aura';
// import {bbedit} from '@uiw/codemirror-theme-bbedit';
// import {bespin} from '@uiw/codemirror-theme-bespin';
// import {darcula} from '@uiw/codemirror-theme-darcula';
// import {dracula} from '@uiw/codemirror-theme-dracula';
// import {duotoneDark,duotoneLight} from '@uiw/codemirror-theme-duotone';
// import {eclipse} from '@uiw/codemirror-theme-eclipse';
// import {githubDark,githubLight } from '@uiw/codemirror-theme-github';
// import {gruvboxLight,gruvboxDark} from '@uiw/codemirror-theme-gruvbox-dark';
// import {materialLight,material,materialDark} from '@uiw/codemirror-theme-material';
// import {noctisLilac} from '@uiw/codemirror-theme-noctis-lilac';
// import {nord} from '@uiw/codemirror-theme-nord';
// import {okaidia} from '@uiw/codemirror-theme-okaidia';
// import {solarizedDark,solarizedLight} from '@uiw/codemirror-theme-solarized';
// import {sublime} from '@uiw/codemirror-theme-sublime';
// import {tokyoNight} from '@uiw/codemirror-theme-tokyo-night';
// import {tokyoNightStorm} from '@uiw/codemirror-theme-tokyo-night-storm';
// import {tokyoNightDay} from '@uiw/codemirror-theme-tokyo-night-day';
// import {vscodeDark} from '@uiw/codemirror-theme-vscode';
// import {xcodeDark,xcodeLight} from '@uiw/codemirror-theme-xcode';



const codeIDEdata = createSlice({
  name: "IDEdata",
  initialState: {
    items: {
      "source": "import java.io.*;\nimport java.util.*;\nclass Main {\n\tpublic static void solution(String str){\n\t\tfor(int i = 0 ; i < str.length(); i++){\n\t\t\tfor(int j = i + 1; j <= str.length(); j++){\n\t\t\t\t// i -> starting point of substring, j-> ending point of substring\n\t\t\t\tif(isPalindrome(str.substring(i, j))){\n\t\t\t\t\tSystem.out.println(str.substring(i,j));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tpublic static boolean isPalindrome(String str){\n\t\tint i = 0, j = str.length() - 1;\n\t\twhile(i < j){\n\t\t\tif(str.charAt(i) != str.charAt(j)){\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\ti++;\n\t\t\tj--;\n\t\t}\n\t\treturn true;\n\t}\n\tpublic static void main(String[] args) {\n\t\tScanner scn = new Scanner(System.in);\n\t\tString str = scn.next();\n\t\tsolution(str);\n\t}\n}",
      // "source": "#include <iostream>\nusing namespace std;int main() {int number;cout << \"Enter an integer: \";cin >> number;cout << \"You entered \" << number;return 0;}",
      "stdin": "abcc",
      "compiler": "java1102",
      "options": {
        "userArguments": "",
        "executeParameters": { "args": "", "stdin": "abcc" },
        "compilerOptions": {
          "executorRequest": true,
          "skipAsm": true,
          "overrides": []
        },
        "filters": { "execute": true },
        "tools": [],
        "libraries": []
      },
      "lang": "java",
      "files": [],
      "allowStoreCodeDebug": true,
      "solution": "import java.io.*;\nimport java.util.*;\nclass Main {\n\tpublic static void solution(String str){\n\t\tfor(int i = 0 ; i < str.length(); i++){\n\t\t\tfor(int j = i + 1; j <= str.length(); j++){\n\t\t\t\t// i -> starting point of substring, j-> ending point of substring\n\t\t\t\tif(isPalindrome(str.substring(i, j))){\n\t\t\t\t\tSystem.out.println(str.substring(i,j));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tpublic static boolean isPalindrome(String str){\n\t\tint i = 0, j = str.length() - 1;\n\t\twhile(i < j){\n\t\t\tif(str.charAt(i) != str.charAt(j)){\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\ti++;\n\t\t\tj--;\n\t\t}\n\t\treturn true;\n\t}\n\tpublic static void main(String[] args) {\n\t\tScanner scn = new Scanner(System.in);\n\t\tString str = scn.next();\n\t\tsolution(str);\n\t}\n}",
    },
  },
  reducers: {
    changeCode:(state, action)=>{
      state.items.source = action.payload;
    },
    changeStdin:(state, action)=>{
      state.items.options.executeParameters.stdin = action.payload;
      state.items.stdin = action.payload;
    },
    changeUser:(state, action)=>{
      state.items.user = action.payload;
    },
  },
});

export const { changeUser, changeCode, changeStdin } =
  codeIDEdata.actions;
export default codeIDEdata.reducer;
