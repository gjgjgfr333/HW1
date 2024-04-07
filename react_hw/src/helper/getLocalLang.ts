export function getLocalLang () {
    const localLang = localStorage.getItem('lang')
    if (localLang === 'en'){
        return 'en'
    }else{
        return 'ru'
    }
}