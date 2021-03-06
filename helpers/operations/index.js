const profileUpdate = require('./profile-update');
const comment = require('./comment');
const customJson = require('./custom-json');
const delegateVestingShares = require('./delegate-vesting-shares');
const escrowApprove = require('./escrow-approve');
const escrowDispute = require('./escrow-dispute');
const escrowRelease = require('./escrow-release');
const escrowTransfer = require('./escrow-transfer');
const follow = require('./follow');
const mute = require('./mute');
const reblog = require('./reblog');
const setWithdrawVestingRoute = require('./set-withdraw-vesting-route');
const changeRecoveryAccount = require('./change-recovery-account');
const transfer = require('./transfer');
const undelegateVestingShares = require('./undelegate-vesting-shares');
const unfollow = require('./unfollow');
const unmute = require('./unmute');
const vote = require('./vote');
const convert = require('./convert');
const transferFromSavings = require('./transfer-from-savings');
const cancelTransferFromSavings = require('./cancel-transfer-from-savings');
const claimAccount = require('./claim-account');

module.exports = {
  comment,
  custom_json: customJson,
  delegate_vesting_shares: delegateVestingShares,
  escrow_approve: escrowApprove,
  escrow_dispute: escrowDispute,
  escrow_release: escrowRelease,
  escrow_transfer: escrowTransfer,
  follow,
  mute,
  reblog,
  set_withdraw_vesting_route: setWithdrawVestingRoute,
  change_recovery_account: changeRecoveryAccount,
  transfer,
  undelegate_vesting_shares: undelegateVestingShares,
  unfollow,
  unmute,
  profile_update: profileUpdate,
  vote,
  convert,
  transfer_from_savings: transferFromSavings,
  cancel_transfer_from_savings: cancelTransferFromSavings,
  claim_account: claimAccount,
};
