---@type ChadrcConfig
local M = {}

M.ui = { theme = 'catppuccin' }

vim.api.nvim_set_hl(0, "Comment", { fg = "#ffffff"})

vim.api.nvim_set_hl(0, "@comment", { link = "Comment"})

M.plugins = "custom.plugins"
return M
