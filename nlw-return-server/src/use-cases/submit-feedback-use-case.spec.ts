import { SubmiteFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn(); 
const sendMailSpy = jest.fn();

/* const submitFeedback = new SubmiteFeedbackUseCase(
    { create: async () => {}},
    {sendMail: async () => {}}
) */

const submitFeedback = new SubmiteFeedbackUseCase(
    { create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type:  'BUG', 
            comment: 'example comment', 
            screenshot: 'data:image/png;base64,987sad456af4sd465sad63sda',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type:  '', 
            comment: 'example comment', 
            screenshot: 'data:image/png;base64,987sad456af4sd465sad63sda',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type:  'BUG', 
            comment: '', 
            screenshot: 'data:image/png;base64,987sad456af4sd465sad63sda',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type:  'BUG', 
            comment: 'Ta tudo preto', 
            screenshot: '987sad456af4sd465sad63sda',
        })).rejects.toThrow();
    });
});