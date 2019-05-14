export const selectLibrary = (libraryaId)=>{
    return {
        type: 'select_library',
        payload: libraryaId
    }
}