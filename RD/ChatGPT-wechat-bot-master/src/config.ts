export default {
  // 填入你的session token
  chatGPTSessionToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjb2R5X3Nsb2FuQG1qa2V5Lm5ldCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVVMifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLXViMktRRTFyYUM2bHBQdW81a1Y2V2FTeiJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjM5MmQ5MzVkYWUxZDM1YTk4YmZkYjRmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNzYyODY5LCJleHAiOjE2NzA4MDYwNjksImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.GZEYkpHORfdZ-aEvSzhS0AURuO4SWCIuVe80B55xPHqqFwnKk8o2PgnSeOzfLeHoe60gKMHVBQLlXcvVfee6ihrkYhas9tSlI11JSQL2-YUEYCgdhmOs6bHtJVDnDHBmkLoQXVrYJdYMyzVspLUaBrqgdVPkEOFTwVKyGTNDWWTPiCvNpscsYi0s-0jxG_gzYB3VmG7qUn2LG40x_BkmSLu3YrFpEHb-b_W7QzpJsZYIetaSrnOteuaAnjsu_t4wZUfsbIl-mxu9jNKUdG8fG4ap6YcdU8DFgpP9-5e_kG0Y626ngZigzTR1sQxbr_XPSJn8M1daBS2_PHmpW2hpLA',
  // 设置获取消息的重试次数
  retryTimes: 3,
  // 在群组中设置唤醒微信机器人的关键词
  groupKey: '小明',
  // 在私聊中设置唤醒微信机器人的关键词
  privateKey: '重置',
  // 重置上下文的关键词，如可设置为reset
  resetKey: 'reset',
  // 开启会后收到ChatGPT的自动回复
  autoReply: true,
  // 根据正则匹配是否自动通过好友验证
  friendShipRule: /chatgpt|chat/,
  // 是否在群聊中按照回复的格式进行回复
  groupReplyMode: true,
  // 是否在私聊中按照回复的格式进行回复
  privateReplyMode: false,
};
