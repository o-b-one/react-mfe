export function isValidEmail(email: string){
    return email?.includes('@') && email.split('@')[1].includes('.');
}