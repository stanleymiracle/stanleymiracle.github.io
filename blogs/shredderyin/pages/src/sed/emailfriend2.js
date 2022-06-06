// developerWorks e-mail to a friend JavaScript
// Adapted from Danny Goodman's
// "JavaScript Bible, 3rd Edition" (www.dannyg.com)
// Initialize global var for new window object
// so it can be accessed by all functions on the page
var emailWindow 
// set flag to help out with special handling for window closing
var isIE3 = (navigator.appVersion.indexOf("MSIE 3") != -1) ? true : false
// make the new window and put some stuff in it
function newWindow() {
        var output = ""
        emailWindow = window.open('','subwindow','HEIGHT=530,WIDTH=600,resizable=yes,scrollbars=yes')
        // take care of Navigator 2
        if (emailWindow.opener == null) {
                emailWindow.opener = window
        }

        output += "<html><BODY BGCOLOR='#FFFFFF' TEXT='#000000'>"
        output += "<form name='emailIt' method='post' action='/email-it.jsp'>"
        output += "<input type=hidden name=subject value=\"" + justTitle + "\">"
        output += "<input type=hidden name=url value=\"" + document.location.href + '?e' + "\">"
        output += "<input type=hidden name=body value=\"" + emailAbstract + "\">"
        output += "</form>"
        output += "</body>"
        output += "</html>"

        emailWindow.document.write(output)
        emailWindow.document.emailIt.submit();
        //emailWindow.document.close()
}                  
// close subwindow, including ugly workaround for IE3
function closeWindow() {
        if (isIE3) {
                // if window is already open, nothing appears to happen
                // but if not, the subwindow flashes momentarily (yech!)
                emailWindow = window.open("","subwindow","HEIGHT=200,WIDTH=200")    
        }          
        if (emailWindow && !emailWindow.closed) {
                emailWindow.close()
        }          
}                 
