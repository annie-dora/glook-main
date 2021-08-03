export default function ({route,redirect}){
    if (route.path !== '/signIn/index'){
        if (!fire.auth.currentUser){
            return redirect ('/signIn/index')
        }
    }else if (route.path === '/signIn/index'){
        if (!fire.auth.currentUser){

        }else {
            return redirect ('/')
        }
    }
}