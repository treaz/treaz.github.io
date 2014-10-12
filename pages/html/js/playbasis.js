var Playbasis = (function () {
    function Playbasis(apiKey) {
        this.apiKey = apiKey;
        this.BASE_URL = "https://api.pbapp.net/";
    }
    Playbasis.prototype.auth = function (apiSecret, callback) {
        return this.callPost("Auth", {api_key: this.apiKey, api_secret: apiSecret}, callback);
    };
    Playbasis.prototype.player = function (playerId, callback) {
        return this.call("Player/" + playerId, '', callback);
    };
    Playbasis.prototype.points = function (playerId, callback) {
        return this.call("Player/" + playerId + "/points", '', callback);
    };
    Playbasis.prototype.point = function (playerId, pointName, callback) {
        return this.call("Player/" + playerId + "/point/" + pointName, '', callback);
    };
    Playbasis.prototype.pointHistory = function (playerId, pointName, offset, limit, callback) {
        var query = "&offset="+offset+"&limit="+limit;
        if(pointName != ''){
            query = query + "&point_name="+pointName;
        }
        return this.call("Player/" + playerId + "/point_history", query, callback);
    };
    Playbasis.prototype.actionLastPerformed = function (playerId, callback) {
        return this.call("Player/" + playerId + "/action/time", '', callback);
    };
    Playbasis.prototype.actionLastPerformedTime = function (playerId, actionName, callback) {
        return this.call("Player/" + playerId + "/action/" + actionName + "/time", '', callback);
    };
    Playbasis.prototype.actionPerformedCount = function (playerId, actionName, callback) {
        return this.call("Player/" + playerId + "/action/" + actionName + "/count", '', callback);
    };
    Playbasis.prototype.badgeOwned = function (playerId, callback) {
        return this.call("Player/" + playerId + "/badge", '', callback);
    };
    Playbasis.prototype.rank = function (rankedBy, limit, callback) {
        return this.call("Player/rank/" + rankedBy + "/" + limit, '', callback);
    };
    Playbasis.prototype.ranks = function (limit, callback) {
        return this.call("Player/ranks/" + limit, '', callback);
    };
    Playbasis.prototype.level = function (level, callback) {
        return this.call("Player/level/" + level, '', callback);
    };
    Playbasis.prototype.levels = function (callback) {
        return this.call("Player/levels", '', callback);
    };
    Playbasis.prototype.goodsOwned = function (playerId, callback) {
        return this.call("Player/" + playerId + "/goods", '', callback);
    };
    Playbasis.prototype.questOfPlayer = function (playerId, questId, callback) {
        var query = "&player_id="+playerId;
        return this.call("Player/quest/" + questId, query, callback);
    };
    Playbasis.prototype.questListOfPlayer = function (playerId, callback) {
        var query = "&player_id="+playerId;
        return this.call("Player/quest", query, callback);
    };
    Playbasis.prototype.badges = function (callback) {
        return this.call("Badge", '', callback);
    };
    Playbasis.prototype.badge = function (badgeId, callback) {
        return this.call("Badge/" + badgeId, '', callback);
    };
    Playbasis.prototype.goodsList = function (callback) {
        return this.call("Goods", '', callback);
    };
    Playbasis.prototype.goods = function (goodsId, callback) {
        return this.call("Goods/" + goodsId, '', callback);
    };
    Playbasis.prototype.quests = function (callback) {
        return this.call("Quest", '', callback);
    };
    Playbasis.prototype.quest = function (questId, callback) {
        return this.call("Quest/" + questId, '', callback);
    };
    Playbasis.prototype.mission = function (questId, missionId, callback) {
        return this.call("Quest/" + questId + "/mission/" + missionId, '', callback);
    };
    Playbasis.prototype.questsAvailable = function (playerId, callback) {
        var query = "&player_id="+playerId;
        return this.call("Quest/available", query, callback);
    };
    Playbasis.prototype.questAvailable = function (questId, playerId, callback) {
        var query = "&player_id="+playerId;
        return this.call("Quest/" + questId + "/available", query, callback);
    };
    Playbasis.prototype.recentPoint = function (offset, limit, callback) {
        var query = "&offset="+offset+"&limit="+limit;
        return this.call("Service/recent_point", query, callback);
    };
    Playbasis.prototype.recentPointByName = function (pointName, offset, limit, callback) {
        var query = "&offset="+offset+"&limit="+limit+"&point_name="+pointName;
        return this.call("Service/recent_point", query, callback);
    };

    Playbasis.prototype.actionConfig = function (callback) {
        return this.call("Engine/actionConfig", '', callback);
    };
    Playbasis.prototype.rule = function (token, action, playerId, url, reward, quantity, callback) {
        url = url || "";
        reward = reward || "";
        quantity = quantity || "";
        return this.callPost("Engine/rule", {token: token, action: action, player_id: playerId, url: url, reward: reward, quantity: quantity}, callback);
    };
    
    Playbasis.prototype.call = function (method, query, callback) {
        var url = this.BASE_URL + method + "?api_key=" + this.apiKey + query;
        $.ajax(url, {
            type: "GET",
            url: url,
            success: callback
        });
        return this;
    };
    Playbasis.prototype.callPost = function (method, data, callback) {
        var url = this.BASE_URL + method;
        $.ajax(url, {
            type: "POST",
            data: data,
            url: url,
            success: callback
        });
        return this;
    };
    return Playbasis;
})();
