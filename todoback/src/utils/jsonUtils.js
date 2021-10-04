class JsonResponse {
    static make(content){
        return { success: true, content };
    }

    static makeWithError(error){
        return { success: false, error };
    }
}

module.exports = JsonResponse;