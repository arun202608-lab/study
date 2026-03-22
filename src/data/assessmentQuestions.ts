// src/data/assessmentQuestions.ts
import { AssessmentQuestion } from '../types';

export const assessmentQuestions: AssessmentQuestion[] = [
  // Beginner Level (5 Questions)
  {
    id: 'b1',
    question: 'What is the correct syntax to output "Hello World" in Java?',
    options: [
      'Console.WriteLine("Hello World");',
      'print("Hello World");',
      'System.out.println("Hello World");',
      'echo("Hello World");',
    ],
    correctAnswer: 2,
    level: 'beginner',
  },
  {
    id: 'b2',
    question: 'Which data type is used to create a variable that should store text?',
    options: ['string', 'String', 'Txt', 'myString'],
    correctAnswer: 1,
    level: 'beginner',
  },
  {
    id: 'b3',
    question: 'Which of these is NOT a valid Java primitive data type?',
    options: ['int', 'float', 'boolean', 'unsigned'],
    correctAnswer: 3,
    level: 'beginner',
  },
  {
    id: 'b4',
    question: 'What is the entry point of any Java application?',
    options: [
      'public static void run()',
      'public static void main(String[] args)',
      'private void start()',
      'public void init()',
    ],
    correctAnswer: 1,
    level: 'beginner',
  },
  {
    id: 'b5',
    question: 'Which keyword is used to define a constant variable whose value cannot be changed?',
    options: ['static', 'const', 'final', 'fixed'],
    correctAnswer: 2,
    level: 'beginner',
  },
  // Moderate Level (5 Questions)
  {
    id: 'm1',
    question: 'Which concept in OOP is about bundling data and methods into a single unit?',
    options: ['Inheritance', 'Polymorphism', 'Abstraction', 'Encapsulation'],
    correctAnswer: 3,
    level: 'moderate',
  },
  {
    id: 'm2',
    question: 'What is method overloading?',
    options: [
      'A class having two or more methods with the same name but different parameters.',
      'A subclass providing a specific implementation of a parent class method.',
      'A method that cannot be inherited.',
      'A method that belongs to the class, not an object.',
    ],
    correctAnswer: 0,
    level: 'moderate',
  },
  {
    id: 'm3',
    question: 'Which block of code is always executed after a `try-catch` block?',
    options: ['finally', 'execute', 'always', 'post'],
    correctAnswer: 0,
    level: 'moderate',
  },
  {
    id: 'm4',
    question: 'What is the purpose of the `super` keyword in Java?',
    options: [
      'To refer to the current object instance.',
      'To call a method in the superclass.',
      'To create a static variable.',
      'To define a final method.',
    ],
    correctAnswer: 1,
    level: 'moderate',
  },
  {
    id: 'm5',
    question: 'What does the `static` keyword mean when applied to a method?',
    options: [
      'The method can only be called from within the same class.',
      'The method belongs to the class itself, not to any specific object instance.',
      'The value of the method\'s return cannot be changed.',
      'The method is automatically executed when the program starts.',
    ],
    correctAnswer: 1,
    level: 'moderate',
  },
  // Advanced Level (5 Questions)
  {
    id: 'a1',
    question: '`HashMap` allows `null` keys and values, while `Hashtable` does not. True or False?',
    options: [
      'True',
      'False',
    ],
    correctAnswer: 0,
    level: 'advanced',
  },
  {
    id: 'a2',
    question: 'What is a "Singleton" in the context of design patterns?',
    options: [
      'A design pattern that restricts the instantiation of a class to a single object.',
      'A class that can only have one method.',
      'A method that can only be called once.',
      'An object that cannot be inherited.',
    ],
    correctAnswer: 0,
    level: 'advanced',
  },
  {
    id: 'a3',
    question: 'What is the main advantage of using Generics (`<T>`) in Java?',
    options: [
      'It makes the code run faster.',
      'It provides compile-time type safety and avoids the need for explicit casting.',
      'It allows you to use primitive types in collections.',
      'It automatically synchronizes collections.',
    ],
    correctAnswer: 1,
    level: 'advanced',
  },
  {
    id: 'a4',
    question: 'In multithreading, what is the purpose of the `synchronized` keyword?',
    options: [
      'To ensure that a thread runs faster than others.',
      'To ensure that only one thread can access a resource or method at a time.',
      'To start a new thread automatically.',
      'To merge two threads into one.',
    ],
    correctAnswer: 1,
    level: 'advanced',
  },
  {
    id: 'a5',
    question: 'What is the difference between `==` and the `.equals()` method when comparing objects?',
    options: [
      'There is no difference; they are interchangeable.',
      '`==` compares memory addresses, while `.equals()` compares values.',
      '`.equals()` compares memory addresses, while `==` compares values.',
      '`==` is only for primitives, `.equals()` is only for Strings.',
    ],
    correctAnswer: 1,
    level: 'advanced',
  },
];