export const ScriptSetupPattern = /<(script)(?:.* \bsetup\b)?[^>]*>([\s\S]+)<\/\1>/
export const StylePattern = /<(style)[^>]*>([\s\S]+)<\/\1>/
export const ScriptOrStyleReplacePattern = /<(script|style)[\s\S]+<\/\1>/g
export const TemplateReplacePattern = /<template>([\s\S]+)<\/template>/g
export const ScriptMatchPattern = /^.*(<script[^>]*>.*<\/script>).*$/s
export const StyleMatchPattern = /^.*(<style[^>]*>.*<\/style>).*$/s
