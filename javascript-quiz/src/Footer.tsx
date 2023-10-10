import { useQuestionData } from "./hooks/useQuestionData"
import { Button } from "@mui/material"
import { useQuestionsStore } from "./store/questions"

export const Footer = () => {
    
    const { correct, incorrect, unanswered } = useQuestionData()
    const reset = useQuestionsStore(state => state.reset)

    return (
        <footer style={{ marginTop: '16px'}}>
            <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
            <div style={{ marginTop: '16px'}}>
                <Button onClick={() => reset()}>
                    Resetear juego
                </Button>
            </div>
        </footer>
    )
}