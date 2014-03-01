var issuesListNodes = document.getElementsByClassName('issues-list');
var issuesList = issuesListNodes && issuesListNodes[0];
var issues = issuesList && issuesList.getElementsByClassName('octicon-git-pull-request');

var numPRs = issues && issues.length;
for (var i = 0; i < numPRs; ++i) {
  var prIssue = issues[i].parentNode && issues[i].parentNode.parentNode;
  if (prIssue) {
    prIssue.style.display ='none';
  }
}

//var listHeaderNodes = document.getElementsByClassName('issues-list-actions');
var listHeaderNodes = document.getElementsByClassName('js-buttons');
var listHeader = listHeaderNodes && listHeaderNodes[0];

var statusNode = document.createElement('a');
statusNode.setAttribute('href', './pulls');
statusNode.setAttribute('class', 'button minibutton');
statusNode.innerHTML = '' + numPRs + ' hidden PRs';

listHeader.appendChild(statusNode);
