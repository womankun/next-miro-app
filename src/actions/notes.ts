'use server'

// 戻り値 Promise<void>
export const submitForm = async (formData: FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    console.log(`Submitted: ${name}, ${email}`)
}