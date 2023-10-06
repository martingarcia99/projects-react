import { IconButton, Stack, Typography, Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useQuestionsStore } from "./store/questions"
import { type Question as QuestionType } from "./types"
import {gradientDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

const Question = ({ info }: { info: QuestionType }) => {
    return (
        <Card variant='outlined' sx={{ bgcolor: '#222', textAlign: 'left', p:2, marginTop: 4}}>

            <Typography variant='h5'>
                {info.question}
            </Typography>

            <SyntaxHighlighter langauge='javascript' style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>

            <List sx={{ bgcolor: '#333'}} disablePadding>
                {info.answers.map((answer, index) => (
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton>
                            <ListItemText primary={answer} sx={{ textAlign: 'center'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)

    const questionInfo = questions[currentQuestion]
    return (
        <>
            <Question info={questionInfo}/>
        </>
    )
}