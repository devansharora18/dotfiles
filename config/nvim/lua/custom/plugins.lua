local plugins = {
 {  "github/copilot.vim",     lazy = false,     config = function()  vim.g.copilot_no_tab_map = true;       vim.g.copilot_assume_mapped = true;       vim.g.copilot_tab_fallback = "";end   },

}

return plugins
