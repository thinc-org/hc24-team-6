export default async function useSignIn(userEmail, userPassword) {
    const response = await fetch('https://softwareengineering-backend.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: username,
          password: password
        })
      });
        if(response.status == 200){
            return response;
        }
        else{
            return null;
        }
}