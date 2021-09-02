module.exports = {
    sessions: (parent, args, {dataSources}, info)=>{
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, {id}, {dataSources}, info) => {
        try {
        return dataSources.sessionAPI.getSessionById(id);
        } catch(error) {
            return {code: 'ERROR', message: 'An error occurred', token:'1345356g'}
        }
    },
    speakers: (parent, args, {dataSources}, info)=>{
        return dataSources.speakerAPI.getSpeakers();
    },
    speakerById: (parent, {id}, {dataSources}, info) => {
        return dataSources.speakerAPI.getSpeakerById(id);
    }
};