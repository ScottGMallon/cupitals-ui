export const makePhotoURL = (url: string | undefined): string => {
    return url ? `${process.env.REACT_APP_STRAPI_API_BASE_URL}${url}` : 'No URL'
}