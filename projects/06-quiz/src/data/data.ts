import { QuizType } from '../types/types'

import javascrip from './QuizJavascript.json'
import php from './QuizPHP.json'
import react from './QuizReact.json'
import sql from './QuizSQL.json'

export const loadQuizzes: QuizType[] = [
  javascrip,
  php,
  react,
  sql
]