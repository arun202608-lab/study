import { Module, CheerUpActivity } from '../types';

// Helper to generate 5 placeholder questions for a module
function generateQuizQuestions(moduleTitle: string) {
  // Real, unique questions for each module
  switch (moduleTitle) {
    case 'Java Fundamentals':
      return [
        {
          id: 'q1',
          question: 'What is the correct file extension for Java source files?',
          options: ['.java', '.jav', '.class', '.js'],
          correctAnswer: 0,
          explanation: 'Java source files use the .java extension.'
        },
        {
          id: 'q2',
          question: 'Which method is the entry point of a Java program?',
          options: ['start()', 'main()', 'run()', 'init()'],
          correctAnswer: 1,
          explanation: 'The main() method is the entry point.'
        },
        {
          id: 'q3',
          question: 'Which keyword is used to define a class in Java?',
          options: ['define', 'class', 'struct', 'object'],
          correctAnswer: 1,
          explanation: 'The class keyword is used.'
        },
        {
          id: 'q4',
          question: 'Which of these is NOT a Java primitive type?',
          options: ['int', 'boolean', 'String', 'double'],
          correctAnswer: 2,
          explanation: 'String is a class, not a primitive type.'
        },
        {
          id: 'q5',
          question: 'What does JVM stand for?',
          options: ['Java Variable Method', 'Java Virtual Machine', 'Java Visual Model', 'Java Version Manager'],
          correctAnswer: 1,
          explanation: 'JVM stands for Java Virtual Machine.'
        }
      ];
    case 'Variables and Data Types':
      return [
        {
          id: 'q1',
          question: 'Which of the following is a valid variable declaration in Java?',
          options: ['int 1x=10;', 'int x=10;', 'float x=10.0;', 'string x="hello";'],
          correctAnswer: 1,
          explanation: 'int x=10; is valid. Variable names cannot start with a digit.'
        },
        {
          id: 'q2',
          question: 'Which data type is used to store true/false values?',
          options: ['int', 'boolean', 'char', 'float'],
          correctAnswer: 1,
          explanation: 'boolean is used for true/false.'
        },
        {
          id: 'q3',
          question: 'What is the default value of a local variable in Java?',
          options: ['0', 'null', 'Depends on type', 'No default value'],
          correctAnswer: 3,
          explanation: 'Local variables must be initialized before use.'
        },
        {
          id: 'q4',
          question: 'Which of these is a floating point data type?',
          options: ['int', 'float', 'char', 'boolean'],
          correctAnswer: 1,
          explanation: 'float is a floating point type.'
        },
        {
          id: 'q5',
          question: 'Which keyword is used to declare a constant in Java?',
          options: ['const', 'final', 'static', 'constant'],
          correctAnswer: 1,
          explanation: 'final is used to declare constants.'
        }
      ];
    case 'Control Structures':
      return [
        {
          id: 'q1',
          question: 'Which statement is used for decision making in Java?',
          options: ['for', 'if', 'while', 'switch'],
          correctAnswer: 1,
          explanation: 'if is used for decision making.'
        },
        {
          id: 'q2',
          question: 'Which loop is guaranteed to execute at least once?',
          options: ['for', 'while', 'do-while', 'foreach'],
          correctAnswer: 2,
          explanation: 'do-while executes at least once.'
        },
        {
          id: 'q3',
          question: 'What is the output of: int x=5; if(x>3) System.out.print("Hi"); else System.out.print("Bye");',
          options: ['Hi', 'Bye', 'HiBye', 'Error'],
          correctAnswer: 0,
          explanation: 'x>3 is true, so "Hi" is printed.'
        },
        {
          id: 'q4',
          question: 'Which keyword is used to exit a loop in Java?',
          options: ['exit', 'stop', 'break', 'return'],
          correctAnswer: 2,
          explanation: 'break exits a loop.'
        },
        {
          id: 'q5',
          question: 'Which of these is not a valid loop in Java?',
          options: ['for', 'while', 'repeat-until', 'do-while'],
          correctAnswer: 2,
          explanation: 'repeat-until is not a Java loop.'
        }
      ];
    case 'Object-Oriented Programming':
      return [
        {
          id: 'q1',
          question: 'Which concept allows using the same method name with different implementations?',
          options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
          correctAnswer: 1,
          explanation: 'Polymorphism allows this.'
        },
        {
          id: 'q2',
          question: 'Which keyword is used to inherit a class in Java?',
          options: ['inherits', 'extends', 'implements', 'instanceof'],
          correctAnswer: 1,
          explanation: 'extends is used for inheritance.'
        },
        {
          id: 'q3',
          question: 'What is data hiding in OOP called?',
          options: ['Polymorphism', 'Abstraction', 'Encapsulation', 'Overloading'],
          correctAnswer: 2,
          explanation: 'Encapsulation is data hiding.'
        },
        {
          id: 'q4',
          question: 'Which of these is not a pillar of OOP?',
          options: ['Inheritance', 'Polymorphism', 'Compilation', 'Abstraction'],
          correctAnswer: 2,
          explanation: 'Compilation is not a pillar of OOP.'
        },
        {
          id: 'q5',
          question: 'Which keyword is used to create an object in Java?',
          options: ['new', 'create', 'object', 'make'],
          correctAnswer: 0,
          explanation: 'new is used to create objects.'
        }
      ];
    case 'Exception Handling':
      return [
        {
          id: 'q1',
          question: 'Which keyword is used to handle exceptions in Java?',
          options: ['try', 'catch', 'throw', 'final'],
          correctAnswer: 1,
          explanation: 'catch handles exceptions.'
        },
        {
          id: 'q2',
          question: 'Which block is always executed whether an exception is handled or not?',
          options: ['try', 'catch', 'finally', 'throw'],
          correctAnswer: 2,
          explanation: 'finally always executes.'
        },
        {
          id: 'q3',
          question: 'Which exception is thrown when dividing by zero?',
          options: ['NullPointerException', 'ArithmeticException', 'IOException', 'ClassNotFoundException'],
          correctAnswer: 1,
          explanation: 'ArithmeticException is thrown.'
        },
        {
          id: 'q4',
          question: 'How do you throw a custom exception?',
          options: ['throw new Exception();', 'raise Exception();', 'error Exception();', 'throw Exception;'],
          correctAnswer: 0,
          explanation: 'throw new Exception(); is correct.'
        },
        {
          id: 'q5',
          question: 'Which keyword is used to manually throw an exception?',
          options: ['catch', 'throw', 'throws', 'final'],
          correctAnswer: 1,
          explanation: 'throw is used to manually throw exceptions.'
        }
      ];
    case 'Collections Framework':
      return [
        {
          id: 'q1',
          question: 'Which interface is the root of the Java Collections Framework?',
          options: ['List', 'Set', 'Collection', 'Map'],
          correctAnswer: 2,
          explanation: 'Collection is the root interface.'
        },
        {
          id: 'q2',
          question: 'Which class implements a dynamic array in Java?',
          options: ['Array', 'ArrayList', 'LinkedList', 'HashSet'],
          correctAnswer: 1,
          explanation: 'ArrayList implements a dynamic array.'
        },
        {
          id: 'q3',
          question: 'Which collection does not allow duplicate elements?',
          options: ['List', 'Set', 'Map', 'Queue'],
          correctAnswer: 1,
          explanation: 'Set does not allow duplicates.'
        },
        {
          id: 'q4',
          question: 'Which method is used to add an element to a list?',
          options: ['insert()', 'add()', 'append()', 'push()'],
          correctAnswer: 1,
          explanation: 'add() is used to add elements.'
        },
        {
          id: 'q5',
          question: 'Which class is used to store key-value pairs?',
          options: ['List', 'Set', 'Map', 'Queue'],
          correctAnswer: 2,
          explanation: 'Map stores key-value pairs.'
        }
      ];
    case 'Multithreading and Concurrency':
      return [
        {
          id: 'q1',
          question: 'Which keyword is used to create a thread in Java?',
          options: ['thread', 'run', 'start', 'extends'],
          correctAnswer: 2,
          explanation: 'start() is used to begin a thread.'
        },
        {
          id: 'q2',
          question: 'Which interface must be implemented to create a thread?',
          options: ['Runnable', 'Threadable', 'Callable', 'Executor'],
          correctAnswer: 0,
          explanation: 'Runnable must be implemented.'
        },
        {
          id: 'q3',
          question: 'Which method is used to pause a thread?',
          options: ['wait()', 'sleep()', 'pause()', 'stop()'],
          correctAnswer: 1,
          explanation: 'sleep() pauses a thread.'
        },
        {
          id: 'q4',
          question: 'Which keyword is used to prevent thread interference?',
          options: ['static', 'final', 'synchronized', 'volatile'],
          correctAnswer: 2,
          explanation: 'synchronized prevents interference.'
        },
        {
          id: 'q5',
          question: 'Which class is used for thread-safe collections?',
          options: ['ArrayList', 'Vector', 'HashMap', 'LinkedList'],
          correctAnswer: 1,
          explanation: 'Vector is thread-safe.'
        }
      ];
    case 'Design Patterns':
      return [
        {
          id: 'q1',
          question: 'Which pattern ensures only one instance of a class exists?',
          options: ['Factory', 'Singleton', 'Builder', 'Adapter'],
          correctAnswer: 1,
          explanation: 'Singleton ensures a single instance.'
        },
        {
          id: 'q2',
          question: 'Which pattern provides a simplified interface to a complex system?',
          options: ['Adapter', 'Facade', 'Observer', 'Decorator'],
          correctAnswer: 1,
          explanation: 'Facade provides a simplified interface.'
        },
        {
          id: 'q3',
          question: 'Which pattern allows objects to be notified of changes in other objects?',
          options: ['Observer', 'Strategy', 'Command', 'Prototype'],
          correctAnswer: 0,
          explanation: 'Observer notifies objects of changes.'
        },
        {
          id: 'q4',
          question: 'Which pattern is used to build complex objects step by step?',
          options: ['Builder', 'Factory', 'Adapter', 'Proxy'],
          correctAnswer: 0,
          explanation: 'Builder builds objects step by step.'
        },
        {
          id: 'q5',
          question: 'Which pattern converts the interface of a class into another interface?',
          options: ['Adapter', 'Decorator', 'Facade', 'Singleton'],
          correctAnswer: 0,
          explanation: 'Adapter converts interfaces.'
        }
      ];
    case 'Performance Optimization':
      return [
        {
          id: 'q1',
          question: 'Which tool is commonly used for Java performance profiling?',
          options: ['JProfiler', 'JConsole', 'JVisualVM', 'All of the above'],
          correctAnswer: 3,
          explanation: 'All listed tools are used for profiling.'
        },
        {
          id: 'q2',
          question: 'Which collection is best for fast lookup by key?',
          options: ['ArrayList', 'LinkedList', 'HashMap', 'TreeSet'],
          correctAnswer: 2,
          explanation: 'HashMap is best for fast key lookup.'
        },
        {
          id: 'q3',
          question: 'Which keyword is used to prevent method inlining by the compiler?',
          options: ['final', 'static', 'synchronized', 'native'],
          correctAnswer: 2,
          explanation: 'synchronized can prevent inlining.'
        },
        {
          id: 'q4',
          question: 'What is the main benefit of using StringBuilder over String concatenation?',
          options: ['Faster performance', 'Less memory', 'Easier syntax', 'No benefit'],
          correctAnswer: 0,
          explanation: 'StringBuilder is faster for repeated concatenation.'
        },
        {
          id: 'q5',
          question: 'Which JVM option enables garbage collection logging?',
          options: ['-Xlog:gc', '-Xmx', '-Xms', '-Xss'],
          correctAnswer: 0,
          explanation: '-Xlog:gc enables GC logging.'
        }
      ];
    default:
      return [];
  }
}

export const javaModules: Module[] = [
  // Beginner Level
  {
    id: 'java-beginner-1',
    title: 'Java Fundamentals',
    description: 'Learn the basics of Java programming language',
    videoUrl: 'https://www.youtube.com/embed/grEKMHGYyns',
    skillLevel: 'beginner',
    order: 1,
    duration: 45,
    isLocked: false,
    quiz: {
      id: 'quiz-beginner-1',
      moduleId: 'java-beginner-1',
      passingScore: 70,
      questions: generateQuizQuestions('Java Fundamentals')
    }
  },
  {
    id: 'java-beginner-2',
    title: 'Variables and Data Types',
    description: 'Understanding Java variables and primitive data types',
  videoUrl: 'https://www.youtube.com/embed/2Y2bXfEk0tA',
    skillLevel: 'beginner',
    order: 2,
    duration: 40,
    isLocked: true,
    quiz: {
      id: 'quiz-beginner-2',
      moduleId: 'java-beginner-2',
      passingScore: 70,
      questions: generateQuizQuestions('Variables and Data Types')
    }
  },
  {
    id: 'java-beginner-3',
    title: 'Control Structures',
    description: 'Learn about loops and conditional statements',
    videoUrl: 'https://www.youtube.com/embed/ldYLYRNaucM',
    skillLevel: 'beginner',
    order: 3,
    duration: 50,
    isLocked: true,
    quiz: {
      id: 'quiz-beginner-3',
      moduleId: 'java-beginner-3',
      passingScore: 70,
      questions: generateQuizQuestions('Control Structures')
    }
  },
  // Intermediate Level
  {
    id: 'java-intermediate-1',
    title: 'Object-Oriented Programming',
    description: 'Deep dive into OOP concepts in Java',
    videoUrl: 'https://www.youtube.com/embed/6T_HgnjoYwM',
    skillLevel: 'intermediate',
    order: 4,
    duration: 60,
    isLocked: true,
    quiz: {
      id: 'quiz-intermediate-1',
      moduleId: 'java-intermediate-1',
      passingScore: 75,
      questions: generateQuizQuestions('Object-Oriented Programming')
    }
  },
  {
    id: 'java-intermediate-2',
    title: 'Exception Handling',
    description: 'Learn to handle errors gracefully in Java',
    videoUrl: 'https://www.youtube.com/embed/1XAfapkBQjk',
    skillLevel: 'intermediate',
    order: 5,
    duration: 45,
    isLocked: true,
    quiz: {
      id: 'quiz-intermediate-2',
      moduleId: 'java-intermediate-2',
      passingScore: 75,
      questions: generateQuizQuestions('Exception Handling')
    }
  },
  {
    id: 'java-intermediate-3',
    title: 'Collections Framework',
    description: 'Master Java Collections and data structures',
    videoUrl: 'https://www.youtube.com/embed/rzA7UJ-hQn4',
    skillLevel: 'intermediate',
    order: 6,
    duration: 55,
    isLocked: true,
    quiz: {
      id: 'quiz-intermediate-3',
      moduleId: 'java-intermediate-3',
      passingScore: 75,
      questions: generateQuizQuestions('Collections Framework')
    }
  },
  // Advanced Level
  {
    id: 'java-advanced-1',
    title: 'Multithreading and Concurrency',
    description: 'Advanced threading concepts and concurrent programming',
    videoUrl: 'https://www.youtube.com/embed/r_MbozD32eo',
    skillLevel: 'advanced',
    order: 7,
    duration: 70,
    isLocked: true,
    quiz: {
      id: 'quiz-advanced-1',
      moduleId: 'java-advanced-1',
      passingScore: 80,
      questions: generateQuizQuestions('Multithreading and Concurrency')
    }
  },
  {
    id: 'java-advanced-2',
    title: 'Design Patterns',
    description: 'Learn common design patterns in Java',
    videoUrl: 'https://www.youtube.com/embed/v9ejT8FO-7I',
    skillLevel: 'advanced',
    order: 8,
    duration: 65,
    isLocked: true,
    quiz: {
      id: 'quiz-advanced-2',
      moduleId: 'java-advanced-2',
      passingScore: 80,
      questions: generateQuizQuestions('Design Patterns')
    }
  },
  {
    id: 'java-advanced-3',
    title: 'Performance Optimization',
    description: 'Advanced techniques for optimizing Java applications',
    videoUrl: 'https://www.youtube.com/embed/ftcvNRNmVfY',
    skillLevel: 'advanced',
    order: 9,
    duration: 75,
    isLocked: true,
    quiz: {
      id: 'quiz-advanced-3',
      moduleId: 'java-advanced-3',
      passingScore: 80,
      questions: generateQuizQuestions('Performance Optimization')
    }
  }
];

export const cheerUpActivities: CheerUpActivity[] = [
  {
    id: 'cheer-1',
    type: 'motivational',
    title: 'Quick Energy Boost! ⚡',
    content: 'You\'re doing amazing! Remember: "The expert in anything was once a beginner." Keep coding and keep growing! 🚀'
  },
  {
    id: 'cheer-2',
    type: 'quiz',
    title: 'Quick Brain Teaser! 🧠',
    content: 'What does "Java" originally refer to?',
    options: ['A coffee type', 'An island', 'A programming language', 'All of the above'],
    correctAnswer: 3
  },
  {
    id: 'cheer-3',
    type: 'motivational',
    title: 'Success Mindset 💪',
    content: 'Every line of code you write is a step forward! Developers aren\'t born, they\'re built through practice. You\'ve got this! 🎯'
  },
  {
    id: 'cheer-4',
    type: 'game',
    title: 'Code Word Scramble! 🎮',
    content: 'Unscramble this Java keyword: CILUPB',
    options: ['BUCKET', 'PUBLIC', 'PICNIC', 'CLUB'],
    correctAnswer: 1
  }
];