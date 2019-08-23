/* eslint-disable no-unused-vars */
var defaultEnterDuration = 1000;
var defaultShowDuration = 2000;
var defaultLeaveDuration = 1000;
var isActive = false;
var positionSelect = document.getElementById("position");
var enterSelect = document.getElementById("enter");
var leaveSelect = document.getElementById("leave");

function getCurrentSelects() {
    return [
        positionSelect.options[positionSelect.selectedIndex].value,
        enterSelect.options[enterSelect.selectedIndex].value,
        leaveSelect.options[leaveSelect.selectedIndex].value
    ];
}

function updatePre() {
    var selects = getCurrentSelects();
    var position = selects[0];
    var enter = selects[1];
    var leave = selects[2];
    var pos = position.split(" ");
    var notify = document.getElementById("notify");
    var newEnterLeave = handlePosition(pos, notify, enter, leave);
    enter = newEnterLeave[0];
    leave = newEnterLeave[1];

    var enterPre = document.getElementById("enter-code");
    var leavePre = document.getElementById("leave-code");

    enterPre.innerHTML = "animate " + enter;
    leavePre.innerHTML = "animate " + leave;
}

function handlePosition(pos, notify, enter, leave) {
    if (pos[0] === "down") {
        notify.style.bottom = "initial";
        notify.style.top = 0;
        if (!enter.includes("fade") && !enter.includes("horizontally"))
            enter += " down";
        if (!leave.includes("fade") && !leave.includes("horizontally"))
            leave += " up";
    } else {
        notify.style.top = "initial";
        notify.style.bottom = 0;
        if (!enter.includes("fade") && !enter.includes("horizontally"))
            enter += " up";
        if (!leave.includes("fade") && !leave.includes("horizontally"))
            leave += " down";
    }
    if (pos[1] === "center") {
        notify.style.right = "initial";
        notify.style.left = "50%";
        notify.style.marginLeft = "-150px";
        if (!enter.includes("fade") && !enter.includes("vertically"))
            enter += " center";
        if (!leave.includes("fade") && !leave.includes("vertically"))
            leave += " center";
    } else if (pos[1] === "left") {
        notify.style.marginLeft = "1rem";
        notify.style.left = "initial";
        notify.style.right = 0;
        if (!enter.includes("fade") && !enter.includes("vertically"))
            enter += " left";
        if (!leave.includes("fade") && !leave.includes("vertically"))
            leave += " right";
    } else {
        notify.style.marginLeft = "1rem";
        notify.style.right = "initial";
        notify.style.left = 0;
        if (!enter.includes("fade") && !enter.includes("vertically"))
            enter += " right";
        if (!leave.includes("fade") && !leave.includes("vertically"))
            leave += " left";
    }

    return [enter, leave];
}

function ubiAnimate(event) {
    event.preventDefault();
    if (!isActive) {
        isActive = true;

        var selects = getCurrentSelects();
        var position = selects[0];
        var enter = selects[1];
        var leave = selects[2];

        var notify = document.getElementById("notify");

        var pos = position.split(" ");

        var newEnterLeave = handlePosition(pos, notify, enter, leave);
        enter = newEnterLeave[0];
        leave = newEnterLeave[1];

        notify.className = "animate " + enter;

        var templateElement = document.getElementById("notificationTemplate");
        var content = templateElement.content.querySelector("div");
        var template = document.importNode(content, true);
        notify.appendChild(template);

        setTimeout(function() {
            notify.className = notify.className.replace(enter, leave);
            setTimeout(function() {
                notify.removeChild(template);
                isActive = false;
            }, defaultLeaveDuration);
        }, defaultEnterDuration + defaultShowDuration);
    }
}
