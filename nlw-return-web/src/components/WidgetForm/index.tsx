import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const FeedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl, 
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Idea",
        image: {
            source: ideaImageUrl, 
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl, 
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

/*
Object.entries(feedbackTypes) => //Ele retorna um array de arrays

[
    ['BUG', {TITLE, IMAGE}]
    ['IDEA', {TITLE, IMAGE}]
    ['THOUGHT', {TITLE, IMAGE}]
]

*/

export type FeedbackType = keyof typeof FeedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">    
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}