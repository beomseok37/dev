import { ChangeEvent, ReactElement, useRef, useState, useEffect } from 'react';
import { MathComponent } from 'mathjax-react';

import Row from 'src/components/base/Grid/Row';
import Column from 'src/components/base/Grid/Column';
import DropdownMenu from 'src/components/study/component/DropdownMenu';
import EditorInput from './EditorInput';

import { Button } from './style';

const metricList = ['x', 'x_dot', 'theta', 'theta_dot'];
const actionList = ['force'];
const equationButtonList = [
  { value: '(', userInput: '(' },
  { value: ')', userInput: ')' },
  {
    value: 'x^y',
    userInput: '{}^{}',
  },
  {
    value: 'e',
    userInput: 'exp',
  },
  {
    value: '\\pi',
    userInput: 'pi',
  },
  {
    value: '\\sin',
    userInput: 'sin(x)',
  },
  {
    value: '\\cos',
    userInput: 'cos(x)',
  },
  {
    value: '\\tan',
    userInput: 'tan(x)',
  },
  {
    value: '\\frac{y}{x}',
    userInput: '{}/{}',
  },
  {
    value: '\\sqrt{x}',
    userInput: 'sqrt{}',
  },
  {
    value: '\\log_{}{}',
    userInput: 'log_{}{}',
  },
];

const equationList = [
  { replacement: '{\\times}', pattern: '*' },
  { replacement: '(', pattern: 'same' },
  { replacement: ')', pattern: 'same' },
  {
    replacement: '{}^{}',
    pattern: 'same',
  },
  {
    replacement: 'e',
    pattern: 'exp',
  },
  {
    replacement: '{\\pi}',
    pattern: 'pi',
  },
  {
    replacement: '\\sin',
    pattern: 'sin',
  },
  {
    replacement: '\\cos',
    pattern: 'cos',
  },
  {
    replacement: '\\tan',
    pattern: 'tan',
  },
  {
    replacement: '\\frac{}{}',
    pattern: '/',
  },
  {
    replacement: '\\sqrt',
    pattern: 'sqrt',
  },
  {
    replacement: '\\log',
    pattern: 'log',
  },
];

function Editor(): ReactElement {
  const [totalEquation, setTotalEquation] = useState('');
  const [userInput, setUserInput] = useState('');
  const [metric, setMetric] = useState('');
  const [action, setAction] = useState('');

  const cursorPosition = useRef(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const setCursorPosition = (position: number) => {
    textAreaRef.current?.focus();
    textAreaRef.current?.setSelectionRange(position, position);
  };

  const setUserInputByButtonClick = (newInput: string) => {
    if (textAreaRef.current) {
      cursorPosition.current = textAreaRef.current?.selectionEnd;
      setUserInput(
        userInput.slice(0, cursorPosition.current) +
          newInput +
          userInput.slice(cursorPosition.current)
      );
      cursorPosition.current += newInput.length;
    }
  };

  const replaceAll = (string: string, pattern: string, replacement: string) => {
    if (pattern === '/') {
      let returnString = string;
      let indexOfDiv = returnString.indexOf('/');

      while (indexOfDiv !== -1) {
        const bracketCount = { open: 0, close: 0 }; // [opened bracket count, closed bracket count]
        const indexOfBracket = { open: -1, close: -1 };

        // find '{' index
        let tempIndex = indexOfDiv - 1;
        while (tempIndex >= 0) {
          if (returnString[tempIndex] === '}') {
            bracketCount.close += 1;
          } else if (returnString[tempIndex] === '{') {
            bracketCount.open += 1;
          }

          if (bracketCount.open === bracketCount.close) {
            break;
          }
          tempIndex -= 1;
        }
        if (tempIndex !== -1) {
          indexOfBracket.open = tempIndex;
        }

        // find '}' index
        bracketCount.open = 0;
        bracketCount.close = 0;
        tempIndex = indexOfDiv + 1;
        while (tempIndex < returnString.length) {
          if (returnString[tempIndex] === '}') {
            bracketCount.close += 1;
          } else if (returnString[tempIndex] === '{') {
            bracketCount.open += 1;
          }

          if (bracketCount.open === bracketCount.close) {
            break;
          }
          tempIndex += 1;
        }
        if (tempIndex < returnString.length) {
          indexOfBracket.close = tempIndex;
        }

        // if not error
        if (indexOfBracket.open !== -1 && indexOfBracket.close !== -1) {
          const numerator = returnString.slice(indexOfBracket.open, indexOfDiv);
          const denominator = returnString.slice(
            indexOfDiv + 1,
            indexOfBracket.close + 1
          );
          returnString = returnString.replace(
            `${numerator}/${denominator}`,
            `\\frac${numerator}${denominator}`
          );
        } else {
          // error
          returnString = string;
          break;
        }
        indexOfDiv = returnString.indexOf('/');
      }
      return returnString;
    }
    return string.split(pattern).join(replacement);
  };

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  useEffect(() => {
    let parsedTotalEquation = userInput;
    equationList.forEach((equation) => {
      if (
        equation.pattern !== 'same' &&
        parsedTotalEquation.indexOf(equation.pattern) > -1
      ) {
        parsedTotalEquation = replaceAll(
          parsedTotalEquation,
          equation.pattern,
          equation.replacement
        );
      }
    });

    if (document.activeElement !== textAreaRef.current) {
      setCursorPosition(cursorPosition.current);
    }
    setTotalEquation(parsedTotalEquation);
  }, [userInput]);

  useEffect(() => {
    setUserInputByButtonClick(metric);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metric]);

  useEffect(() => {
    setUserInputByButtonClick(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return (
    <Column padding="40px" width="700px">
      <Row padding="20px" width="100%" justifyContent="space-evenly">
        <DropdownMenu
          bind={[metric, setMetric]}
          menuList={metricList}
          version={1}
        />
        <DropdownMenu
          bind={[action, setAction]}
          menuList={actionList}
          version={1}
        />
      </Row>
      <Row padding="20px">
        {equationButtonList.map((equationButton, index) => (
          <Button
            key={equationButton.value + index.toString()}
            onClick={() => setUserInputByButtonClick(equationButton.userInput)}
            aria-label="수식 버튼"
          >
            <MathComponent tex={equationButton.value} />
          </Button>
        ))}
      </Row>
      <Row padding="20px" width="100%" alignItems="center">
        <EditorInput
          userInput={userInput}
          onChange={handleChange}
          ref={textAreaRef}
        />
        <MathComponent tex={String.raw`${totalEquation}`} />
      </Row>
    </Column>
  );
}

export default Editor;
